import { search_generator } from "./search/search/generator";
import { on_search_generator } from "./on_search/on_search/generator";

import { search_inc_generator } from "./search/search_inc/generator";
import { on_search_inc_generator } from "./on_search/on_search_inc/generator";
import { on_search_inc_disable_generator } from "./on_search/on_search_inc_disable/generator";

import { select_generator } from "./select/select/generator";
import { on_select_generator } from "./on_select/on_select/generator";
import { init_generator } from "./init/init/generator";
import { on_init_generator } from "./on_init/on_init/generator";
import { confirm_generator } from "./confirm/confirm/generator";
import { on_confirm_generator } from "./on_confirm/on_confirm/generator";
import { on_status_pending_generator } from "./on_status/on_status_pending/generator";
import { on_status_packed_generator } from "./on_status/on_status_packed/generator";
import { on_status_agent_assigned_generator } from "./on_status/on_status_agent_assigned/generator";
import { on_status_picked_generator } from "./on_status/on_status_picked/generator";
import { on_status_out_for_delivery_generator } from "./on_status/on_status_out_for_delivery/generator";
import { on_status_order_delivered_generator } from "./on_status/on_status_order_delivered/generator";

import { select_out_of_stock_generator } from "./select/select_out_of_stock/generator";
import { on_select_out_of_stock_generator } from "./on_select/on_select_out_of_stock/generator";

import { cancel_generator } from "./cancel/cancel/generator";
import { on_cancel_generator } from "./on_cancel/on_cancel/generator";
import { on_cancel_rto_generator } from "./on_cancel/on_cancel_rto/generator";
import { on_status_rto_delivereddisposed_generator } from "./on_status/on_status_rto_delivereddisposed/generator";
import { on_update_part_cancel_generator } from "./on_update/on_update_part_cancel/generator";

import { update_partial_cancel_settlement_generator } from "./update/update_partial_cancel_settlement/generator";
export async function Generator(
  action_id: string,
  existingPayload: any,
  sessionData: any
) {
  switch (action_id) {
    case "search":
      return search_generator(existingPayload, sessionData);
    case "on_search":
      return on_search_generator(existingPayload, sessionData);
    case "search_inc":
      return search_inc_generator(existingPayload, sessionData);
    case "on_search_inc":
      return on_search_inc_generator(existingPayload, sessionData);
    case "on_search_inc_disable":
      return on_search_inc_disable_generator(existingPayload, sessionData);
    case "select":
      return select_generator(existingPayload, sessionData);
    case "on_select":
      return on_select_generator(existingPayload, sessionData);
    case "init":
      return init_generator(existingPayload, sessionData);
    case "on_init":
      return on_init_generator(existingPayload, sessionData);
    case "confirm":
      return confirm_generator(existingPayload, sessionData);
    case "on_confirm":
      return on_confirm_generator(existingPayload, sessionData);
    case "on_status_pending":
      return on_status_pending_generator(existingPayload, sessionData);
    case "on_status_packed":
      return on_status_packed_generator(existingPayload, sessionData);
    case "on_status_agent_assigned":
      return on_status_agent_assigned_generator(existingPayload, sessionData);
    case "on_status_picked":
      return on_status_picked_generator(existingPayload, sessionData);
    case "on_status_out_for_delivery":
      return on_status_out_for_delivery_generator(existingPayload, sessionData);
    case "on_status_order_delivered":
      return on_status_order_delivered_generator(existingPayload, sessionData);
    case "select_out_of_stock":
      return select_out_of_stock_generator(existingPayload, sessionData);
    case "on_select_out_of_stock":
      return on_select_out_of_stock_generator(existingPayload, sessionData);
    case "cancel":
      return cancel_generator(existingPayload, sessionData);
    case "on_cancel":
      return on_cancel_generator(existingPayload, sessionData);
    case "on_cancel_rto":
      return on_cancel_rto_generator(existingPayload, sessionData);
    case "on_status_rto_delivereddisposed":
      return on_status_rto_delivereddisposed_generator(
        existingPayload,
        sessionData
      );
    case "on_update_part_cancel":
      return on_update_part_cancel_generator(existingPayload, sessionData);
    case "update_partial_cancel_settlement":
      return update_partial_cancel_settlement_generator(
        existingPayload,
        sessionData
      );
    default:
      console.log(action_id);
      throw new Error("Invalid action id found! ");
  }
}
